import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar as Cal, CalendarList, Agenda } from 'react-native-calendars';
import { FlatList } from 'react-native-gesture-handler';

const markedDate = (date: Date) => {
  const dateFormat = date.toISOString().split('-');
  const markedDate =
    dateFormat[0] + '-' + dateFormat[1] + '-' + dateFormat[2].slice(0, 2);
  return markedDate;
};
interface iTodo {
  index: number;
  contents: string;
}
const data: iTodo[] = [
  { index: 1, contents: 'todo-item1' },
  {
    index: 2,
    contents: 'todo-item2',
  },
];

const Calendar = () => {
  const today = markedDate(new Date());

  return (
    <SafeAreaView>
      <View>
        <Text>캘린더</Text>
      </View>

      <Cal
        hideDayNames={true}
        enableSwipeMonths={true}
        markedDates={{
          [today]: { marked: true, dotColor: 'red' },
        }}
      />

      <FlatList
        data={data}
        renderItem={({ item }: { item: iTodo }) => {
          return <Text>{item.contents}</Text>;
        }}
      ></FlatList>

      <Button title="새로운 할일 추가하기" onPress={() => 'test'}></Button>
    </SafeAreaView>
  );
};

export default Calendar;
