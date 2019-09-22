import React from 'react';
import {
  Spin, Form, Icon, Input, Radio, InputNumber, Divider, Button, Upload
} from 'antd';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import TextArea from 'antd/lib/input/TextArea';
import BottomContainer from '../common/BottomContainer';
import {FilePond} from 'react-filepond'
import 'filepond/dist/filepond.min.css';

const yup = require('yup');

const Recipe = (props) => {
  const { loading, recipe, onCancel, onChange } = props;  
  return (
    <>
      <Spin spinning={loading} />
      <Formik 
        initialValues={{tmp: '', ...recipe} }
        validationSchema={
            yup.object().shape({
              name: yup.string().min(4, "Name can not be less than 4 characters").max(100).required('Name is required.'),
              instructions: yup.string().min(10, "Instructions can not be less than 4 characters").max(500).required('Instructions is required.'),             
            })
        }
        onSubmit={(r) => {
          delete r['tmp'];
          onChange(r)}
        }

        render={({values, errors, setFieldValue, handleSubmit }) => (
          <>
          <Form className="login-form">

            <Form.Item
                hasFeedback={!!errors['name']}
                validateStatus={errors['name'] && 'error'}
                help={errors['name']}
              >
                  <Input placeholder="Name" value={values['name']} onChange={(e) => setFieldValue('name', e.target.value)} 
                    prefix={<Icon type="fire" style={{ color: 'rgba(0,0,0,.25)' }} />}/>

            </Form.Item>
            <Form.Item>
              <Radio.Group defaultValue={values['vegeterian']} buttonStyle="solid">
                  <Radio.Button value={false}>Non-Vegeterian Food</Radio.Button>
                  <Radio.Button value={true}>Vegeterian Food</Radio.Button>
                </Radio.Group>
              </Form.Item>

              <Form.Item 
                hasFeedback={!!errors['people']}
                validateStatus={errors['people'] && 'error'}
                help={errors['people']}
              >
                <span>For how many people: </span><InputNumber prefix={<Icon type="number" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                value={values['people']} min={1} max={15} defaultValue={3} onChange={(e) => setFieldValue('people', e)} />
              </Form.Item>

              <Form.Item
                hasFeedback={!!errors['ingredients']}
                validateStatus={errors['ingredients'] && 'error'}
                help={errors['ingredients']}
              >

                <Divider orientation="left">Ingredients</Divider>
                <ul>
                  { values['ingredients'].map((item, index) => <li key={index}>{item} 
                  <Icon type="delete" onClick={(e) => {

                    let items = values['ingredients'].filter(x=>x !== item);
                    setFieldValue('ingredients', items);

                  }} style={{ marginLeft: '7px', color: 'rgba(255,0,0)' }} /> </li>)}
                </ul>
                <Input value={values['tmp']} placeholder="Add ingredient here" onChange={(e) => setFieldValue('tmp', e.target.value)}
                onKeyDown={e => {
                  if(e.keyCode === 13) {
                    let items = values['ingredients'].concat(values['tmp']);            
                    setFieldValue('ingredients', items);
                    setFieldValue('tmp', '');
                  }
                }}

                    prefix={<Icon type="plus" style={{ color: 'rgba(0,0,0,.25)' }} />}/>

              </Form.Item>

              <Form.Item
                hasFeedback={!!errors['instructions']}
                validateStatus={errors['instructions'] && 'error'}
                help={errors['instructions']}
              >
                <TextArea placeholder='Add instructions here...' value={values['instructions']} onChange={(e) => setFieldValue('instructions', e.target.value)} rows={4} />
                </Form.Item>

                <Form.Item> 
                  {values['image'] && values['image'].length !== 0 ? 
                    <img style={{maxHeight: '300px', maxWidth: '300px'}} 
                    src={`http://localhost:3001/photos/${values['image']}`} alt='Food'/> : null }          
                <FilePond
                      // Set the callback here.
                      onprocessfile={(error, file) => {
                        console.log(file.serverId);
                        setFieldValue('image', file.serverId)
                      }}
                      name="photo"
                      server="http://localhost:3001/photos"
                  />
                </Form.Item>

                  </Form>
                  
                <BottomContainer>
                  <Button style={{ marginRight: 8 }} onClick={onCancel}>Cancel</Button>
                  <Button onClick={handleSubmit} type="primary">
                    Submit
                  </Button>
                </BottomContainer>
                </>
                )}
      />
    </>
  );
};

export const RecipeType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    recordTime: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    vegeterian: PropTypes.bool.isRequired,
    people: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired
  });

Recipe.propTypes = {
  loading: PropTypes.bool,
  recipe: RecipeType,
  onCancel: PropTypes.func,
  onChange: PropTypes.func.isRequired,
};

Recipe.defaultProps = {
  loading: false,
  recipe: {
    id: '',
    name: '',
    recordTime: '',
    image: '',
    vegeterian: false,
    people: 0,
    ingredients: [],
    instructions: ''
  },
  onCancel: () => { },
};


export default Recipe;


  