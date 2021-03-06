import { useNavigate } from 'react-router-dom'
import Button from '../common/components/button'
import Layout from '../common/components/layout'
import { GreetingBlock, IntroText } from './style'

const Home: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Layout>
      <GreetingBlock>
        <IntroText>
          {`Hello, I'm `} <b>Patrick DeVries</b>, a full-stack developer
        </IntroText>
        <Button variant="text" onClick={() => navigate('/portfolio')}>
          Check out my projects
        </Button>
      </GreetingBlock>
    </Layout>
  )
}

export default Home
