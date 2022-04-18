import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  NewNote: { id: string };
  ListNote: undefined;
  ListNoteNavigator: undefined;
  UserNavigation: undefined;
};


export type Props = NativeStackScreenProps<RootStackParamList>;