import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import {FlatList} from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
export const List = styled(AnimatedFlatList).attrs(props => ({
  component: AnimatedFlatList,
  keyExtractor: item => String(item.Id),
  contentContainerStyle: {
    backgroundColor: props.theme.colors.background,
    flexGrow: 1,
  },
}))``;
