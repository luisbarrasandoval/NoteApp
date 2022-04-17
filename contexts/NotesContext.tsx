import { createContext, useContext, useEffect, useReducer } from "react";
import Note from "../interfaces/Note";
import NOTAS from "../notas";

enum ActionType {
  ADD_NOTE = "ADD_NOTE",
  REMOVE_NOTE = "REMOVE_NOTE",
  UPDATE_NOTE = "UPDATE_NOTE",
}

interface Action {
  type: ActionType;
  payload: Note 
}

interface INoteContext {
  notes: Array<Note>;
  dispatch: React.Dispatch<Action>;
}

const reducerNotes = (state: Array<Note>, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_NOTE:
      return [...state, action.payload];
    case ActionType.REMOVE_NOTE:
      return state.filter((note) => note.id !== action.payload.id);
    case ActionType.UPDATE_NOTE:
      return state.map((note) =>
        note.id === action.payload.id ? { ...note, ...action.payload } : note
      );
    default:
      return state;
  }
};

const defaultState = {
  notes: [],
  dispatch: () => {},
};

const NoteContext = createContext<INoteContext>(defaultState);

const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, dispatch] = useReducer(reducerNotes, [], () => NOTAS);


  return (
    <NoteContext.Provider
      value={{
        notes,
        dispatch,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNoteContext = () => {
  const context = useContext(NoteContext);
  if (context === undefined) {
    throw new Error("useNoteContext must be used within a NoteProvider");
  }

  const addNote = (note: Note) => {
    context.dispatch({
      type: ActionType.ADD_NOTE,
      payload: note,
    });
  };


  const deleteNote = (note: Note) => {
    context.dispatch({
      type: ActionType.REMOVE_NOTE,
      payload: note
    });
  };

  return {notes: context.notes, addNote, deleteNote};
};

export { NoteContext, NoteProvider, useNoteContext };