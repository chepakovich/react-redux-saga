import React, { useState } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const OperatorItem = ({ instrument, opdata: { instruments, runs } }) => {
  const [filteredRuns, setFilteredRuns] = useState(null);
  const [showRuns, setShowRuns] = useState(false);

  const handleClick = (instrument) => {
    setShowRuns(!showRuns);
    if (!filteredRuns) {
      const filteredRuns = _.filter(runs, { instrument });
      setFilteredRuns(filteredRuns);
    }
  };

  const instrumentName = _.find(instruments, { id: instrument }).name;
  return (
    <>
      <div className="instrument" onClick={() => handleClick(instrument)}>
        {instrumentName}
      </div>
      {filteredRuns && showRuns ? (
        filteredRuns.length > 0 ? (
          filteredRuns.map((run) => (
            <div className="run" key={run.id}>
              {run.id}
            </div>
          ))
        ) : (
          <div className="run">no runs</div>
        )
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  opdata: state.opdata,
});

export default connect(mapStateToProps)(OperatorItem);
