/* eslint-disable no-script-url */
import React from 'react';
import {
  Tag, Divider, Table, Spin, Drawer, Button, Icon, Popconfirm,
} from 'antd';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

import {RecipeType} from './Recipe';


export default class RecipesList extends React.Component {
  componentDidMount() {
    const { fetchRecipes } = this.props;
    fetchRecipes();
  }

  getColumns = () => {
    const { selectRecipe, deleteRecipe } = this.props;
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Vegetarian Food',
        dataIndex: 'vegetarian',
        key: 'vegetarian',
        render: (text, record) => ( record.vegetarian ? 'Yes': 'No')
      },    
      {
        title: '',
        key: 'action',
        render: (text, record) => (
          <span>
            <Button type="primary" shape='round' icon='edit' onClick={() => selectRecipe(record.id)}></Button>
            <Divider type="vertical" />

            <Popconfirm placement="topLeft" title='Really ?' onConfirm={() => deleteRecipe(record.id)} okText="Yes" cancelText="No">
              <Button type="danger" shape='round' icon='delete'></Button>
            </Popconfirm>
          </span>
        ),
      },
    ];
    return columns;
  }

  onClose = () => {
    console.log('onclose')
    const { selectRecipe } = this.props;
    selectRecipe('');
  };

  render() {
    const { loading, items, selectedRecipe, newRecipe, updateRecipe } = this.props;   

    // console.log(loading, items, selectedRecipe);

    return (
      <>
        {/* <Spin spinning={loading} size="large" /> */}
        <Icon type="plus" onClick={(e) => newRecipe()} />
        <Table columns={this.getColumns()} dataSource={items} loading={loading} />

        <Drawer
          title={!selectedRecipe || selectedRecipe.id === '' ? 'Create new Recipe' : `Modifying ${selectedRecipe.name}` } 
          width={520}
          closable={false}
          onClose={this.onClose}
          visible={selectedRecipe} 
          destroyOnClose={true}
        >
          <Recipe
            recipe={selectedRecipe}
            loading={loading}
            onCancel={this.onClose}
            onChange={(x) => updateRecipe(x)}
          />
         
        </Drawer>

      </>
    );
  }
}

RecipesList.propTypes = {
  items: PropTypes.arrayOf(RecipeType),
  selectedRecipe: RecipeType,
  loading: PropTypes.bool,
  fetchRecipes: PropTypes.func.isRequired,
  selectRecipe: PropTypes.func.isRequired,
};

RecipesList.defaultProps = {
  items: [],
  selectedRecipe: null,
  loading: false,
};
