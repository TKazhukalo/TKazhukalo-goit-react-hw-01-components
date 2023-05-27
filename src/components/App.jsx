import user from './Profile/user.json';
import { Profile } from '../components/Profile/Profile';

import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';

import { Container } from './Profile/Profile.styled';
export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </Container>
  );
};
