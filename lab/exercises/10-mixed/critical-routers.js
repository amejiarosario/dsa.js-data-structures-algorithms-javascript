/**
 * Given a list of router links, find the routers that are critical to maintain communication.
 * A router is considered critical if when they are removed,
 * other routers lose connection to other routers different from the one removed.
 *
 * @param {number} numRouters - The number of routers connected in a data center >= 3.
 * @param {number} numLinks - The number of links.
 * @param {[[number, number]]} links - The pair of routers connected by the link.
 * @return {number[]} - The list of critical routers;
 */
function criticalRouters(numRouters, numLinks, links) {

}

module.exports = criticalRouters;
