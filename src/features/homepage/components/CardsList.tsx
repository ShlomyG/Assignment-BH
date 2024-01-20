import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../constants/colors';
import UserCard from './UserCard';
import {ECardType, IUser} from '../models/usersModel';
import {IPost} from '../models/postsModel';
import PostCard from './PostCard';
import {useAppSelector} from '../../../store/Store';
import BoldText from '../../../components/BoldText';
import {Emojis, HomeStrings} from '../../../constants/strings';

interface Props {
  data: Array<IUser | IPost>;
  cardType?: ECardType;
}

const CardsList: React.FC<Props> = ({data, cardType}) => {
  const isUserCard = cardType === ECardType.USER;
  const {usersData, currentUserId} = useAppSelector(
    state => state.HomepageSlice,
  );

  const currentUserName = usersData[currentUserId - 1]?.name || '';

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

  const renderEmptyPost = (
    <View style={styles.empty_list}>
      <View style={styles.empty_icon_container}>
        <Text style={styles.empty_icon}>{Emojis.POST}</Text>
      </View>
      <Text style={styles.empty_list_text}>{HomeStrings.EMPTY_LIST}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <BoldText style={styles.header_list}>
        {isUserCard ? 'Users' : `${currentUserName} Posts`}
      </BoldText>
      <FlatList
        style={styles.list_style}
        data={data}
        bounces={false}
        ListEmptyComponent={!isUserCard ? renderEmptyPost : null}
        numColumns={isUserCard ? 1 : 3}
        contentContainerStyle={
          isUserCard ? styles.list_container : styles.list_columns_container
        }
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  list_style: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: colors.white,
    width: '100%',
  },
  list_container: {
    paddingBottom: 15,
  },
  header_list: {
    alignSelf: 'center',
  },
  list_columns_container: {
    alignItems: 'center',
  },
  empty_list: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
  },
  empty_icon_container: {
    marginTop: 30,
    marginBottom: 10,
  },
  empty_icon: {
    fontSize: 30,
  },
  empty_list_text: {
    color: colors.dark_grey,
    fontSize: 16,
    textAlign: 'center',
  },
  clean_filter_button: {
    alignSelf: 'center',
    color: colors.blue,
    margin: 6,
    fontSize: 14,
  },
});

export default CardsList;
