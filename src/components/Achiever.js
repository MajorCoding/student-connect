import styled from "styled-components/macro"
import color from "../constant/color"

const Achiever = ({ userAvatar, rank, name, course, branch, mark, total, ...rest }) => {
  return (
    <Container rank={rank} {...rest}>
      <Header>
        <Avatar>
          <img src={userAvatar} alt="student" />
          <Badge>
            <img className="avatar" src={`/assets/badge-${rank}.svg`} alt="badge" />
          </Badge>
        </Avatar>
      </Header>
      <Content>
        <Info>
          <Name rank={rank}>{name}</Name>
          <ClassAndBranch>
            {course} • {branch}
          </ClassAndBranch>
        </Info>
        <Marks rank={rank}>
          <p>
            <span>{mark}</span> / {total}
          </p>
        </Marks>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  border-radius: 6px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ rank }) => rank === 1 && "linear-gradient(180deg, #FEEDB5 0%, #FFFFFF 74%)"};
  background: ${({ rank }) => rank === 2 && "linear-gradient(180deg, #CFDAE1 0%, #FFFFFF 74%)"};
  background: ${({ rank }) => rank === 3 && "linear-gradient(180deg, #DCB4A5 0%, #FFFFFF 74%)"};
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  overflow: hidden;

  @media (min-width: 768px) {
    transform: ${({ rank }) => rank === 1 && "scale(1.25)"};
    z-index: ${({ rank }) => (rank === 1 ? "2" : "1")};
  }
`
const Header = styled.div`
  padding: 36px 24px 0 24px;

  @media (min-width: 768px) {
    padding: 24px 24px 18px 24px;
  }
`

const Avatar = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  border: 2px solid #fff;
  border-radius: 8px;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);

  img {
    opacity: 1;
    width: 100%;
    border-radius: 8px;
  }
`

const Badge = styled.div`
  position: absolute;
  width: 56px;
  right: 10px;
  bottom: -34px;
  img {
    width: 100%;
  }
`

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -8px;
`

const Info = styled.div`
  padding: 18px 24px;
  text-align: center;
`

const Name = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${({ rank }) => rank === 1 && "#ECA502"};
  color: ${({ rank }) => rank === 2 && "#8297B4"};
  color: ${({ rank }) => rank === 3 && "#94513D"};

  @media (min-width: 768px) {
    font-size: 20px;
  }
`
const ClassAndBranch = styled.p`
  font-size: 12px;
  font-weight: 4 00;
  text-align: center;
  color: ${color.gray600};

  @media (min-width: 768px) {
    font-size: 14px;
  }
`

const Marks = styled.div`
  padding: 18px 24px;
  text-align: center;
  background: ${({ rank }) => rank === 1 && "#ECA502"};
  background: ${({ rank }) => rank === 2 && "#8297B4"};
  background: ${({ rank }) => rank === 3 && "#94513D"};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  p {
    font-size: 14px;
    color: ${({ rank }) => rank === 2 && "#CEDAE1"};
    color: ${({ rank }) => rank === 1 && "#FDF0AF"};
    color: ${({ rank }) => rank === 3 && "#DAB5A1"};

    span {
      font-size: 20px;
      font-weight: 600;
      color: #fff;
    }
  }
`

export default Achiever
