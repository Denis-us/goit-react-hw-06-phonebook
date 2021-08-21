import React from "react";
import { connect } from "react-redux";
import filterAction from "../../redux/actions";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label className={styles.filter}>
      <p className={styles.title}>Find contacts by name </p>

      <input
        className={styles.inputFilter}
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </label>
  );
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (e) =>
    dispatch(filterAction.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
