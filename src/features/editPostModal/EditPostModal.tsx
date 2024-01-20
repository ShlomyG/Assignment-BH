import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import {useAppDispatch, useAppSelector} from '../../store/Store';
import {colors} from '../../constants/colors';
import {GeneralStrings, editPostStrings} from '../../constants/strings';
import AppButton from '../../components/AppButton';
import {resetModalState, setModalVisible} from './state/ModalSlice';
import AppInput from '../../components/AppInput';
import {setEditPost} from '../homepage/state/HomeSlice';
import ErrorMessage from '../../components/ErrorMessage';
import BoldText from '../../components/BoldText';
import {EInputReturnType} from './models/editModalModels';

interface Props {
  isModalVisible: boolean;
}

const EditPostModal: React.FC<Props> = ({isModalVisible}) => {
  const dispatch = useAppDispatch();
  const {currentPostIndex, postsCache, currentUserId} = useAppSelector(
    state => state.HomepageSlice,
  );

  const [titleText, setTitleText] = useState<string>('');
  const [bodyText, setBodyText] = useState<string>('');
  const postDetails = postsCache[currentUserId]?.[currentPostIndex];
  const titleInputRef = useRef(null);
  const bodyInputRef = useRef(null);

  useEffect(() => {
    if (postDetails) {
      setTitleText(postDetails?.title ?? '');
      setBodyText(postDetails?.body ?? '');
    }
  }, [postDetails]);

  const closeModal = () => {
    dispatch(setModalVisible(false));
  };

  const submitEnabled = !!titleText && !!bodyText;

  return (
    <View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Modal
          isVisible={isModalVisible}
          style={styles.modal_view}
          onBackdropPress={() => {
            closeModal();
          }}
          swipeDirection={'down'}
          onSwipeComplete={() => {
            closeModal();
          }}>
          <View style={styles.modal_wrapper}>
            <View style={styles.modal_container}>
              <BoldText style={styles.modal_title}>
                {editPostStrings.TITLE}
              </BoldText>
              <View>
                <AppInput
                  ref={titleInputRef}
                  value={titleText}
                  onChange={(text: string) => {
                    setTitleText(text);
                  }}
                  label={editPostStrings.POST_TITLE}
                  returnKeyType={EInputReturnType.NEXT}
                  onSubmitEditing={() => {
                    (
                      bodyInputRef as React.RefObject<TextInput>
                    ).current?.focus();
                  }}
                />
                <AppInput
                  ref={bodyInputRef}
                  numberOfLines={8}
                  textStyle={styles.textarea_text}
                  inputStyle={styles.textarea_view}
                  value={bodyText}
                  returnKeyType={EInputReturnType.DONE}
                  onChange={(text: string) => {
                    setBodyText(text);
                  }}
                  label={editPostStrings.POST_BODY}
                />
              </View>
              <AppButton
                text={GeneralStrings.CONFIRM}
                onPress={() => {
                  dispatch(setEditPost({title: titleText, body: bodyText}));
                  dispatch(resetModalState());
                }}
                enable={submitEnabled}
              />
              <AppButton
                text={GeneralStrings.CANCEL}
                styleButton={styles.cancel_button}
                onPress={() => {
                  dispatch(setModalVisible(false));
                }}
              />
              {!submitEnabled && (
                <ErrorMessage textMessage={editPostStrings.ERROR_REQUIRED} />
              )}
            </View>
          </View>
        </Modal>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  modal_view: {
    margin: 0,
  },
  modal_wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal_container: {
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    height: '75%',
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modal_title: {
    fontSize: 20,
    paddingTop: 16,
  },
  cancel_button: {
    backgroundColor: colors.red,
    borderColor: 'black',
    marginTop: 10,
    marginBottom: 6,
  },
  textarea_view: {
    height: 200,
  },
  textarea_text: {
    paddingTop: 10,
    height: 200,
  },
});

export default EditPostModal;
