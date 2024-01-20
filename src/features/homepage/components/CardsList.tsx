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
  const {usersData, currentUserId} = useAppSelector(
    state => state.HomepageSlice,
  );

  const currentUserName = usersData[currentUserId]?.name || '';

  const renderItem = (item: IUser | IPost, index: number) => {
    return (
      <>
        {isUserCard ? (
          <UserCard {...(item as IUser)} />
        ) : (
          <PostCard item={item as IPost} index={index} />
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
        keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => renderItem(item, index)}
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
