import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useAppSelector} from '../../store/Store';
import CardsList from './components/CardsList';
import {ECardType} from './models/usersModel';

const HomeScreen: React.FC = () => {
  const {usersData, postsCache, currentUserId} = useAppSelector(
    state => state.HomepageSlice,
  );

  return (
    <View style={styles.container}>
      <View style={styles.upper_section}>
        <CardsList data={usersData} cardType={ECardType.USER} />
      </View>
      <View style={styles.bottom_section}>
        <CardsList data={postsCache[currentUserId]} cardType={ECardType.POST} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  upper_section: {
    flex: 0.6,
    width: '100%',
  },
  bottom_section: {
    flex: 0.75,
    width: '100%',
  },
});

export default HomeScreen;
