/* eslint-disable no-script-url */
import React from "react";
import { Divider, Table, Drawer, Button, Popconfirm, Avatar } from "antd";
import PropTypes from "prop-types";
import Recipe from "./Recipe";

import { RecipeType } from "./Recipe";

export default class RecipesList extends React.Component {
  componentDidMount() {
    const { fetchRecipes } = this.props;
    fetchRecipes();
  }

  getColumns = () => {
    const { selectRecipe, deleteRecipe } = this.props;
    const columns = [
      {
        title: "",
        dataIndex: "image",
        key: "image",
        render: text => (
          <Avatar src={`http://localhost:3001/photos/${text}`} size="default" />
        )
      },

      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => ("" + a.name).localeCompare(b.name),
        sortDirections: ["descend", "ascend"]
      },
      {
        title: "Vegetarian Food",
        dataIndex: "vegetarian",
        key: "vegetarian",
        render: (text, record) => (record.vegetarian ? "Yes" : "No"),
        sorter: (a, b) => a.vegetarian == b.vegetarian,
        sortDirections: ["descend", "ascend"]
      },
      {
        title: "Added at",
        dataIndex: "recordTime",
        key: "recordTime",
        sorter: (a, b) => a.recordTime > b.recordTime,
        sortDirections: ["descend", "ascend"]
      },
      {
        title: "",
        key: "action",
        render: (text, record) => (
          <span>
            <Button
              type="primary"
              shape="round"
              icon="edit"
              onClick={() => selectRecipe(record.id)}
            ></Button>
            <Divider type="vertical" />

            <Popconfirm
              placement="topLeft"
              title="Really ?"
              onConfirm={() => deleteRecipe(record.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="danger" shape="round" icon="delete"></Button>
            </Popconfirm>
          </span>
        )
      }
    ];
    return columns;
  };

  onClose = () => {
    console.log("onclose");
    const { selectRecipe } = this.props;
    selectRecipe("");
  };

  render() {
    const {
      loading,
      items,
      selectedRecipe,
      newRecipe,
      updateRecipe
    } = this.props;

    // console.log(loading, items, selectedRecipe);

    return (
      <>
        {/* <Spin spinning={loading} size="large" /> */}

        <Table
          columns={this.getColumns()}
          dataSource={items}
          loading={loading}
        />
        <Button
          icon="plus"
          shape="round"
          type="primary"
          size="large"
          onClick={() => newRecipe()}
        >
          New Recipe!
        </Button>

        <Drawer
          title={
            !selectedRecipe || selectedRecipe.id === ""
              ? "Create new Recipe"
              : `Modifying ${selectedRecipe.name}`
          }
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
            onChange={x => updateRecipe(x)}
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
  selectRecipe: PropTypes.func.isRequired
};

RecipesList.defaultProps = {
  items: [],
  selectedRecipe: null,
  loading: false
};
