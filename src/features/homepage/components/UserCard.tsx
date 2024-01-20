import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../constants/colors';
import {Emojis} from '../../../constants/strings';
import {IUser} from '../models/usersModel';
import MapButton from './MapButton';
import {useAppDispatch} from '../../../store/Store';
import {getPostsForUserAction} from '../state/HomeAction';
import DeleteButton from '../../../components/DeleteButton';
import {setDeleteUser} from '../state/HomeSlice';

const UserCard: React.FC<IUser> = item => {
  const {name, username, company, email, address, id} = item;
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(getPostsForUserAction(id));
        }}
        style={styles.rightContainer}>
        <View style={styles.imageContainer}>
          <Text style={styles.icon}>{Emojis.USER}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>{`${name}(${username})`}</Text>
          <Text style={styles.subTitleText}>{company?.name}</Text>
          <Text style={styles.subTitleText}>{email}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.leftContainer}>
        <MapButton
          lat={parseFloat(address?.geo.lat)}
          lng={parseFloat(address?.geo.lng)}
        />
        <DeleteButton action={() => dispatch(setDeleteUser(id))} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 30,
    paddingVertical: 20,
    borderColor: colors.black,
    borderWidth: 0.5,
  },
  rightContainer: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    maxWidth: 55,
  },
  textContainer: {
    flex: 1,
  },
  subTitleText: {
    fontSize: 10,
    color: colors.grey,
  },
  leftContainer: {
    flex: 0.3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  geoText: {
    fontSize: 16,
  },
  icon: {
    fontSize: 30,
  },
  delete: {
    fontSize: 22,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default UserCard;
