import React, { useState } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Company from './Company';

const Operator = ({ operator, opdata: { companies } }) => {
  const [company, setCompany] = useState(null);
  const [showCompany, setShowCompany] = useState(false);

  const handleClick = (operatorId) => {
    setShowCompany(!showCompany);
    if (!company) {
      const company = _.find(companies, { operators: [operatorId] });
      if (company) setCompany(company);
    }
  };

  return (
    <div className="operatorBlock">
      <div className="name" onClick={() => handleClick(operator.id)}>
        {operator.name}
      </div>
      {company && showCompany && <Company key={company.id} company={company} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  opdata: state.opdata,
});

export default connect(mapStateToProps)(Operator);
