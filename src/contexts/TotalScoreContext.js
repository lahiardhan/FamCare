import React from 'react';

const TotalScoreContext = React.createContext(0);

export const TotalScoreProvider = TotalScoreContext.Provider;
export const TotalScoreConsumer = TotalScoreContext.Consumer;

export default TotalScoreContext;
