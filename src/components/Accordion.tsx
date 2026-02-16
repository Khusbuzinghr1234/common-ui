import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";

export const Accordion = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={{ marginBottom: 12 }}>
      <Pressable onPress={() => setOpen(!open)}>
        <Text style={{ fontWeight: "bold" }}>{question}</Text>
      </Pressable>

      {open && <Text>{answer}</Text>}
    </View>
  );
};
