import styled from "styled-components";

export const NewTaskModal = styled.form`
    width: 30em ;
    background-color: rgb(15, 15, 15);
    padding: 1em;
    z-index: 10;
    box-shadow: 0 0 3px 1px  #555 ;

    .title {
        padding-bottom: 1em;
        label {
            display: block;
        }

        input {
            width: 100%;
            height: 3em;
            background-color: transparent;
            border: none;
            border-bottom: 1px solid #fff;
            padding: 0.5em;
            color: #fff;

            &::placeholder {
                color: #c2c2c2;
            }

            &:focus {
                outline: none;
            }
        }
    }

    #editor {
    height: 20em;
    padding: 0.5em 0em;
    color: #fff;
    #editor_cp {
      height: 14em;
      &::placeholder{
        color: #fff !important;
      }
    }

    .ql-blank {
        color: #c2c2c2 ;
    }
}
`