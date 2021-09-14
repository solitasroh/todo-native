import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar as Cal, CalendarList, Agenda } from 'react-native-calendars';
import { FlatList } from 'react-native-gesture-handler';
import { iTodo } from '@Screens/ITodo';
import TodoDatas from '@Utils/DummyData';
import styled from 'styled-components/native';

const markedDate = (date: Date) => {
  const dateFormat = date.toISOString().split('-');
  const markedDate =
    dateFormat[0] + '-' + dateFormat[1] + '-' + dateFormat[2].slice(0, 2);
  return markedDate;
};

const Container = styled.SafeAreaView`
  background-color: white;
  width: 100%;
  height: 100%;
`;

const HeaderContainer = styled.View`
  padding: 15px 10px;
  margin-bottom: 10px;
`;
const HeaderTitle = styled.Text`
  font-size: 23px;
  font-weight: 600;
`;

const CalendarContainer = styled.View`
  padding: 15px 10px;
`;

const ListConainter = styled.View`
  padding: 15px 10px;
  flex: 1;
`;

const ItemContainer = styled.TouchableOpacity`
  padding: 15px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const ItemContents = styled.Text`
  flex: 1;
  font-size: 18px;
  font-weight: 600;
  margin-left: 30px;
`;

const ItemCheck = styled.TouchableOpacity`
  border: 2px;
  width: 25px;
  height: 25px;
  border-radius: 40px;
  border-color: #cdcdcd;
`;

const NewItemButton = styled.TouchableOpacity`
  border: 0;
  border-radius: 10px;
  background-color: #3fa55c;
  height: 36px;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: 600;
`;
const Calendar = () => {
  const today = markedDate(new Date());

  const todoItemRenderer = ({ item }: { item: iTodo }) => {
    return (
      <ItemContainer>
        <ItemCheck></ItemCheck>
        <ItemContents>{item.title}</ItemContents>
        <ItemCheck></ItemCheck>
        <ItemCheck></ItemCheck>
      </ItemContainer>
    );
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>캘린더</HeaderTitle>
      </HeaderContainer>

      <CalendarContainer>
        <Cal
          hideDayNames={true}
          enableSwipeMonths={true}
          markedDates={{
            [today]: { marked: true, dotColor: 'red' },
          }}
        />
      </CalendarContainer>

      <ListConainter>
        <FlatList data={TodoDatas} renderItem={todoItemRenderer} />
      </ListConainter>

      <NewItemButton onPress={() => 'test'}>
        <ButtonText>새로운 할일 추가하기</ButtonText>
      </NewItemButton>
    </Container>
  );
};

export default Calendar;
