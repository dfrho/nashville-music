import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`

export const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`

export const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const ListItem = styled.li`
  margin-bottom: 2rem;
`

export const Article = styled.article`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Date = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const YoutubeContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const Summary = styled.div`
  font-size: 1.125rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`

export const ReadMore = styled.div`
  font-size: 1rem;
  font-weight: bold;

  & a {
    color: #3b82f6;
  }
`
