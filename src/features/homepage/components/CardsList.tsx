import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {colors} from '../../../constants/colors';
import UserCard from './UserCard';
import {ECardType, IUser} from '../models/usersModel';
import {IPost} from '../models/postsModel';
import PostCard from './PostCard';
import {useAppSelector} from '../../../store/Store';
import BoldText from '../../../components/BoldText';

interface Props {
  data: Array<IUser | IPost>;
  cardType?: ECardType;
}

const CardsList: React.FC<Props> = ({data, cardType}) => {
  const isUserCard = cardType === ECardType.USER;
  const {usersData, currentUserIndex} = useAppSelector(
    state => state.HomepageSlice,
  );

  const currentUserName = usersData[currentUserIndex]?.name || '';

  const renderItem = (item: IUser | IPost) => {
    return (
      <>
        {isUserCard ? (
          <UserCard {...(item as IUser)} />
        ) : (
          <PostCard {...(item as IPost)} />
        )}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <BoldText style={styles.headerList}>
        {isUserCard ? 'Users' : `${currentUserName} Posts`}
      </BoldText>
      <FlatList
        style={styles.listStyle}
        data={data}
        bounces={false}
        horizontal={!isUserCard}
        contentContainerStyle={styles.listContainer}
        keyExtractor={item => item?.id?.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => renderItem(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listStyle: {
    flex: 1,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    overflow: 'hidden',
    backgroundColor: colors.white,
    width: '100%',
  },
  listContainer: {
    paddingBottom: 15,
  },
  headerList: {
    alignSelf: 'center',
  },
});

export default CardsList;
