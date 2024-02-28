import React, { useCallback, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import {
  checkOneFeedback,
  loadFeedbackListAll,
  removeOneFeedback,
} from '../lawyerProfile/feedbackSlice';
import Feedback from '../lawyerProfile/types/Feedback';
import AdminFeedbackCard from './AdminFeedbackCard';
import css from '../admin/admin.module.css';

function AdminFeedback(): JSX.Element {
  const dispatch = useAppDispatch();

  const admin = useSelector((state: RootState) => state.admin.admin);

  useEffect(() => {
    dispatch(loadFeedbackListAll());
  }, [dispatch]);

  const feedbackList = useSelector(
    (state: RootState) => state.feedback.feedbackList,
  );
  const handleFeedbackRemove = useCallback(
    (id: number): void => {
      dispatch(removeOneFeedback(id));
    },
    [dispatch],
  );

  const handleFeedbackCheck = useCallback(
    (oneFeedback: Feedback): void => {
      dispatch(checkOneFeedback(oneFeedback));
      dispatch(loadFeedbackListAll());
    },
    [dispatch],
  );

  if (!admin) {
    return <Container>Ne admin</Container>;
  }

  return (
    <Container className={css.container}>
      <Container>
        <h2>Непринятые отзывы</h2>
        <Container className={css.innerContainerFalse}>
          {feedbackList.map(
            (el) =>
              !el.accepted && (
                <AdminFeedbackCard
                  key={el.id}
                  card={el}
                  onRemove={handleFeedbackRemove}
                  onChange={handleFeedbackCheck}
                />
              ),
          )}
        </Container>
      </Container>
      <Container>
        <h2>Принятые отзывы</h2>
        <Container className={css.innerContainer}>
          {feedbackList.map(
            (el) =>
              el.accepted && (
                <AdminFeedbackCard
                  key={el.id}
                  card={el}
                  onRemove={handleFeedbackRemove}
                  onChange={handleFeedbackCheck}
                />
              ),
          )}
        </Container>
      </Container>
    </Container>
  );
}

export default AdminFeedback;
