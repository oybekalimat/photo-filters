import React, { Fragment } from "react";
import styled from "styled-components";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import CustomUpload from "../components/CustomUpload";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  max-height: 100vh;
  padding: 16px;
  background-color: #2b2b2b;
  border-left: 1px solid #363636;
  user-select: none;

  input[type="file"] {
    display: none;
  }
`;

const SlidersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .slider-label {
    font-size: 13px;
    color: #b3b3b3;
    display: flex;
    justify-content: space-between;

    span {
      font-size: 12px;
    }
  }

  .rangeslider {
    margin: 14px 0 30px 0;
  }

  .rangeslider-horizontal {
    height: 4px;
    border-radius: 6px;
    background-color: #1e1e1ed1;
    cursor: pointer;
  }

  .rangeslider-horizontal .rangeslider__fill {
    border-radius: 4px;
    background-color: #3690fd;
    box-shadow: none;
  }

  .rangeslider__handle {
    width: 14px;
    height: 14px;
    box-shadow: none;

    &:focus {
      outline: none;
    }

    ::after {
      content: "";
      display: none;
    }
  }
`;

const ActionsWrapper = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 100%;
  font-size: 14px;
  text-align: center;
  padding-top: 6px;
  padding-bottom: 6px;
  background-color: #4e4d50;
  border: 1px solid transparent;
  border-radius: 6px;
  color: #dbd9d9;
  margin-top: 12px;
  cursor: pointer;
  box-shadow: 0px 1px 3px -1px rgb(0 0 0 / 60%);
  transition: background-color 0.2s ease;
  user-select: none;

  &:hover {
    background-color: #605f63;
  }
  &:focus {
    outline: none;
  }
`;

const Heading = styled.div`
  color: #b3b3b3;
  margin-bottom: 30px;
`;

function Sidebar({ filters, handleUpload, handleFiltersChange, resetFilters }) {
  return (
    <Wrapper>
      <Heading>Settings</Heading>
      <SlidersWrapper>
        {filters.map((filter, index) => (
          <Fragment key={index}>
            <div className="slider-label">
              {filter.name.charAt(0).toUpperCase() + filter.name.slice(1)}
              <span>{filter.value}</span>
            </div>
            <Slider
              type="range"
              orientation="horizontal"
              name={filter.name}
              tooltip={false}
              value={filter.value}
              min={0}
              max={filter.maxValue}
              step={1}
              onChange={(value) => handleFiltersChange(filter.name, value)}
            />
          </Fragment>
        ))}
      </SlidersWrapper>
      <ActionsWrapper>
        <Button style={{ marginBottom: 8 }} onClick={resetFilters}>
          Reset Settings
        </Button>
        <CustomUpload onChange={handleUpload} />
        <Button>Save</Button>
      </ActionsWrapper>
    </Wrapper>
  );
}

export default Sidebar;
