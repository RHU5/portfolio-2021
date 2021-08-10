import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const S = {};

S.Section = styled.section`
  padding: 100px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(112, 112, 112, 1) 0%,
    rgba(61, 61, 61, 1) 100%
  );

  @media (max-width: 770px) {
    padding: 100px 20px;
  }
`;

S.Title = styled.h1`
  padding-bottom: 20px;
  margin-bottom: 30px;

  font-size: 50px;
  font-weight: 700;
  border-bottom: 5px solid white;
  color: white;

  @media (max-width: 770px) {
    font-size: 30px;
  }
`;

S.Description = styled.p`
  margin-bottom: 50px;

  line-height: 2;
  color: white;
  font-size: 18px;
`;

S.ProjectList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 400px));
  justify-content: center;
  align-items: stretch;
  gap: 20px;
`;

S.ProjectItem = styled.li`
  border-radius: 10px;
  background-color: black;
  box-shadow: 8px 8px 6px 3px rgba(50, 50, 50, 1);

  :first-child {
    grid-row: 1/3;
  }
`;

S.ProjectImage = styled.img`
  width: 100%;
  margin-bottom: 10px;

  border-top: 5px solid #636e72;
  border-bottom: 5px solid #636e72;
`;

S.NameBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

S.Name = styled.span`
  display: block;
  padding: 25px 20px 15px;
  font-size: 20px;
  color: white;
`;

S.LinkBox = styled.div`
  padding: 25px 20px 15px;
`;

S.Link = styled.a`
  font-size: 20px;
  color: white;

  :not(:last-child) {
    margin-right: 10px;
  }

  :hover {
    color: #f0932b;
  }
`;

S.IconBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9%, 10%));
  gap: 10px;

  padding: 10px 20px 20px;
`;

S.Icon = styled.img`
  width: 100%;

  background-color: white;
  border-radius: 5px;
`;

const HowToStudy = ({ study }) => {
  return (
    <S.Section>
      <S.Title>How To Study</S.Title>
      <S.Description>
        {`저는 여러 로드맵을 참고하여 HTML, CSS, Javascript를 우선적으로
        공부하고 이후에 Node.js, MongoDB, React를 학습하였습니다. 클론
        코딩을 통해 웹사이트를 직접 제작해보면서 실행환경 설정, 배포,
        디자인 패턴에 대해 경험해볼 수 있었습니다. 이론적인 부분에
        있어서는 모르는 개념이 생길 때마다 PoiemaWeb, javascript.info,
        Google을 참조하여 공부했습니다. 두루뭉술하게 이해된 개념을
        잡기 위해 블로그에 정리하면서 내 것으로 만들도록 노력했습니다.`}
      </S.Description>
      <S.ProjectList>
        {study.map((project) => (
          <S.ProjectItem key={project.id}>
            <S.NameBox>
              <S.Name>{project.name}</S.Name>
              <S.LinkBox>
                <S.Link
                  href={project.gitUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Git
                </S.Link>
                <S.Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </S.Link>
              </S.LinkBox>
            </S.NameBox>
            <S.IconBox>
              {project.skill.map((icon, index) => (
                <S.Icon key={index} src={icon} alt="" />
              ))}
            </S.IconBox>
            <S.ProjectImage src={project.image} />
          </S.ProjectItem>
        ))}
      </S.ProjectList>
    </S.Section>
  );
};

HowToStudy.propTypes = {
  study: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      skill: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      gitUrl: PropTypes.string.isRequired,
      demoUrl: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default HowToStudy;
