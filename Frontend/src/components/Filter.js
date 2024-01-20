import React from "react";

function Filter(props) {
  return (
    <div class="filter-container">
      <label>
        Name Filter:
        <input
          type="text"
          value={props.nameFilter}
          onChange={(e) => props.setNameFilter(e.target.value)}
        />
      </label>
      <label>
        Price Filter:
        <input
          type="number"
          value={props.priceFilter}
          onChange={(e) => props.setPriceFilter(e.target.value)}
        />
      </label>
      <label>
        Product Type:
        <select
          value={props.typeFilter}
          onChange={(e) => props.setTypeFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Meta">meta</option>
          <option value="Switch">Switch</option>
          <option value="PlayStation/ps">PlayStation</option>
          <option value="Mobile">Mobile</option>
          <option value="HP">HP</option>
          <option value="Bundle">Bundles</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;
