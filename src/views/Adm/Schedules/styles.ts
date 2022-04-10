import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import {FlatList} from 'react-native';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export const Container = styled.View``;
export const List = styled(AnimatedFlatList).attrs(props => ({
  component: AnimatedFlatList,
  keyExtractor: item => String(item.Id),
  contentContainerStyle: {
    backgroundColor: props.theme.colors.background,
    flexGrow: 1,
  },
}))``;
export const FilterButton = styled.TouchableOpacity``;
