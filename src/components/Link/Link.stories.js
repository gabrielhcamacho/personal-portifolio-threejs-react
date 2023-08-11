import { Link } from 'components/Link';
import { StoryContainer } from '../../../.storybook/StoryContainer';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://gabrielcamacho.vercel.app/">Primary link</Link>
    <Link secondary href="https://gabrielcamacho.vercel.app/">
      Secondary link
    </Link>
  </StoryContainer>
);
