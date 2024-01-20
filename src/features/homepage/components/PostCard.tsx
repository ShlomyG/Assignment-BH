import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IPost} from '../models/postsModel';
import {colors} from '../../../constants/colors';
import {SCREEN_WIDTH} from '../../../constants/device';
import DeleteButton from '../../../components/DeleteButton';
import {useAppDispatch} from '../../../store/Store';
import {setCurrentPostIndex, setDeletePostById} from '../state/HomeSlice';
import {setModalVisible} from '../../editPostModal/state/ModalSlice';

interface PostCardProps {
  item: IPost;
  index: number;
}

const PostCard: React.FC<PostCardProps> = ({item, index}) => {
  const dispatch = useAppDispatch();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        dispatch(setCurrentPostIndex(index));
        dispatch(setModalVisible(true));
      }}>
      <DeleteButton
        action={() => {
          dispatch(setDeletePostById(item?.id as number));
        }}
        style={styles.deleteIcon}
      />
      <Text numberOfLines={2} style={styles.title}>
        {item?.title}
      </Text>
      <Text numberOfLines={4} style={styles.body}>
        {item?.body}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: SCREEN_WIDTH / 3 - 16,
    backgroundColor: colors.gold,
    padding: 8,
    margin: 6,
    borderRadius: 8,
    paddingBottom: 26,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    paddingRight: 16,
  },
  body: {
    fontSize: 14,
  },
  deleteIcon: {
    position: 'absolute',
    left: '45%',
    bottom: 0,
  },
});

export default PostCard;
