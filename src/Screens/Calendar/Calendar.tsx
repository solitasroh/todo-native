import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar as Cal, CalendarList, Agenda } from 'react-native-calendars';
import { FlatList } from 'react-native-gesture-handler';
import { iTodo } from '@Screens/ITodo';
import TodoDatas from '@Utils/DummyData';

const markedDate = (date: Date) => {
  const dateFormat = date.toISOString().split('-');
  const markedDate =
    dateFormat[0] + '-' + dateFormat[1] + '-' + dateFormat[2].slice(0, 2);
  return markedDate;
};

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
        data={TodoDatas}
        renderItem={({ item }: { item: iTodo }) => {
          return <Text>{item.title}</Text>;
        }}
      ></FlatList>

      <Button title="새로운 할일 추가하기" onPress={() => 'test'}></Button>
    </SafeAreaView>
  );
};

export default Calendar;
