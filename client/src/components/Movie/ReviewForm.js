import React, {Fragment} from 'react';
import styled from 'styled-components';
import Gray from './Stars/Gray';
import Checked from './Stars/Checked';
import Hover from './Stars/Hover';

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  padding: 30px 0 10px 0;
  border: 1px solid #e6e6e6;
  background: #fff;
  margin-top: 10px;
  width: 100%;
`
const RatingBox = styled.div` 
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;

  input {
    display: none;
  }

  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml;charset=UTF-8,${Gray}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
  }

  input:checked ~ label, 
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Checked}");
  }

  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Hover}");
  }
`
const Field = styled.div`
  border-radius: 4px;

  input {
    width: 100%;
    min-height:50px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;
  }
  
  textarea {
    width: 100%;
    min-height: 80px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;      
  }
`
const ReviewWrapper = styled.div`
  background: #fff;
  padding: 20px;
  margin-left: 15px;
  padding-bottom:80px;
  border-left: 1px solid rgba(0,0,0,0.1);
  height: 100vh;
  padding-top: 100px;
  background: black;
  padding-right: 80px;
`
const SubmitButton = styled.div`
  color: #fff;
  background-color: #333;
  border-radius: 4px;   
  padding:12px;  
  border: 1px solid #fff;
  width: 100%;
  font-size: 18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  margin-top: 20px;
  text-align: center;

  &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #fff;
  }
`
const ReviewHeadline = styled.div`
  font-size: 30px;
  padding: 15px 0;
  font-weight: bold;
  color: #fff;
`
const RatingTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`


const ReviewForm = (props) => {
  const ratingOptions = [5,4,3,2,1].map( (score, index) => {
    return (
      <Fragment>
        <input type="radio" value={score} checked={props.review.score == score} name="rating" onChange={() => console.log('selected:', score)} id={`rating-${score}`} />
        <label onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    )
  })

  return (
    <ReviewWrapper>
      <form onSubmit={props.handleSubmit}>
        <ReviewHeadline>Share your review of {props.attributes.name}!</ReviewHeadline>
        <Field>
          <input onChange={props.handleChange} value={props.review.title || ""} type="text" name="title" placeholder="Review Title" />
        </Field>
        <Field>
          <input onChange={props.handleChange} value={props.review.description || ""} type="text" name="description" placeholder="Review Description" />
        </Field>
        <Field>
          <RatingContainer>
            <RatingTitle>Rate This Movie</RatingTitle>
              <RatingBox>
              {ratingOptions}
              </RatingBox>
          </RatingContainer>
        </Field>
        <SubmitButton type="submit">Submit Your Review</SubmitButton>
      </form>
    </ReviewWrapper>
  )
}

export default ReviewForm