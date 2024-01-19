import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IPost} from '../models/postsModel';
import {colors} from '../../../constants/colors';
import {SCREEN_WIDTH} from '../../../constants/device';
import DeleteButton from '../../../components/DeleteButton';
import {useAppDispatch} from '../../../store/Store';
import {setDeletePost} from '../state/HomeSlice';

const PostCard: React.FC<IPost> = item => {
  const {title, body, id} = item;
  const dispatch = useAppDispatch();
  return (
    <View style={styles.card}>
      <DeleteButton
        action={() => {
          dispatch(setDeletePost(id));
        }}
        style={styles.deleteIcon}
      />
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
      <Text numberOfLines={4} style={styles.body}>
        {body}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: SCREEN_WIDTH / 3 - 16,
    backgroundColor: colors.blue,
    padding: 6,
    margin: 6,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingRight: 16,
  },
  body: {
    fontSize: 14,
  },
  deleteIcon: {
    position: 'absolute',
    left: '85%',
    top: 4,
  },
});

export default PostCard;
