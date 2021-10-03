import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.header.color}
  }
`;