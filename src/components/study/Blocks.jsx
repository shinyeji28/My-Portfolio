import styled from "styled-components";

const Wrapper = styled.div`
    padding: lrem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
`;

const Block = styled.div`
    padding: ${(props) => props.padding};
    border: 1px solid black;
    border-radius: 1rem;
    background-color: ${(props) => props.backgroundColor};
    color:white;
    font-size: 2rem;
    font-weight:bold;
    test-align:center;
`;

const blockItems = [
    {
        label:"1",
        padding: "1rem",
        backgroundColor: "red"
    },
    {
        label:"2",
        padding: "2rem",
        backgroundColor: "green"
    },
    {
        label:"3",
        padding: "3rem",
        backgroundColor: "blue"
    }
];

function Blocks(props){
    return (
        <Wrapper>
            {blockItems.map((blockItems) => {
                return (
                    <Block
                        padding={blockItems.padding}
                        backgroundColor={blockItems.backgroundColor}
                    >
                        {blockItems.label}
                    </Block>
                );
            })}
        </Wrapper>
    );
}
export default Blocks;