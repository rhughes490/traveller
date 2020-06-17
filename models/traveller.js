const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation)
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => {
    return journey.transport == transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => {
    return journey.distance >= minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal += journey.distance
  }, 0)
  return total
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  transports = this.journeys.map(journey => journey.transport)
  transports.filter(function(transport, i) {
    return transports.indexOf(transport) >= i;
  });
};


module.exports = Traveller;
