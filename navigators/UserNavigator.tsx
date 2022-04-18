import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useEffect } from "react";
import { Button, Image, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Props } from "../Types";

const Tab = createMaterialTopTabNavigator();

const perfil = {
  username: "Luis",
  email: "luisbarradev@gmail.com",
  avatar: "https://picsum.photos/200",
  first_name: "Luis",
  last_name: "Barra",
};

const ProfileSettings = () => {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      {Object.keys(perfil).map((key) => (
        <View style={{ marginBottom: 10 }} key={key}>
          <Text
            style={{
              fontSize: 16,
            }}
          >
            {key}
          </Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
            }}
            placeholder={perfil[key as keyof typeof perfil]}
          />
        </View>
      ))}

      <View style={{}}>
        <Button
          title="Guardar"
          onPress={() => {
            alert("IMPLEMENTAR");
          }}
        />
      </View>
    </View>
  );
};

const sessiones = [
  {
    id: 1,
    ip: "192.168.18.5",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
    createdAt: "2020-06-01T00:00:00.000Z",
    twoFactor: false,
  },

  {
    id: 2,
    ip: "192.168.18.1",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
    createdAt: "2020-06-01T00:00:00.000Z",
    twoFactor: false,
  },

  {
    id: 3,
    ip: "192.168.18.2",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
    createdAt: "2020-06-01T00:00:00.000Z",
    twoFactor: true,
  },
];

const getBrowserOfUserAgent = (userAgent: string) => {
  if (userAgent.includes("Chrome")) {
    return "Chrome";
  } else if (userAgent.includes("Firefox")) {
    return "Firefox";
  } else if (userAgent.includes("Safari")) {
    return "Safari";
  } else if (userAgent.includes("Opera")) {
    return "Opera";
  } else {
    return "Desconocido";
  }
};

const ActivitySetting = () => {
  return (
    <View>
      {sessiones.map((session) => (
        <TouchableOpacity
          style={{
            marginBottom: 10,
            padding: 10,
            backgroundColor: session.twoFactor ? "#f5f5f5" : "#fff",
            borderTopColor: "#ccc",
            borderTopWidth: 1,
          }}
          key={session.id}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>IP: </Text>
            <Text>{session.ip}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>Navegador: </Text>
            <Text>{getBrowserOfUserAgent(session.userAgent)}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>Fecha: </Text>
            <Text>{session.createdAt}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const customHeader = () => {
  return (
    <View
      style={{
        marginTop: 40,
        padding: 10,
        flexDirection: "row",
      }}
    >
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={{ width: 130, height: 110, borderRadius: 5 }}
      />
      <View
        style={{
          marginLeft: 12,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Luis Barra
          </Text>

          <Ionicons
            name="ios-checkmark-circle"
            size={24}
            color="skyblue"
            style={{
              marginLeft: 12,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
          }}
        >
          luisbarradev@gmail.com
        </Text>
        <View>
          <Text>3 notas</Text>
          <Text>5 sesiones activas</Text>
        </View>
      </View>
    </View>
  );
};

function UserNavigator({ navigation }: Props) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: customHeader,
    });
  }, []);

  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen name="Perfil" component={ProfileSettings} />
      <Tab.Screen name="Sesiones activas" component={ActivitySetting} />
    </Tab.Navigator>
  );
}

export default UserNavigator;
