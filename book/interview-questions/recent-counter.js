const { Queue } = require('../../src/index');

// tag::description[]
/**
 * Counts the most recent requests within a time window.
 * Each request has its timestamp.
 * If the time window is 2 seconds,
 * any requests that happened more than 2 seconds before the most
 * recent request should not count.
 *
 * @example - The time window is 3 sec. (3000 ms)
 *  const counter = new RecentCounter(3000);
 *  counter.request(100); // 1
 *  counter.request(1000); // 2
 *  counter.request(3000); // 3
 *  counter.request(3100); // 4
 *  counter.request(3101); // 4
 *
 */
class RecentCounter {
  // end::description[]
  // tag::solution[]
  // end::solution[]
  // tag::description[]
  /**
   * @param {number} maxWindow - Max. time window (in ms) for counting requests
   *  Defaults to 1 second (1000 ms)
   */
  constructor(maxWindow = 1000) {
  // end::description[]
  // tag::solution[]
    this.window = maxWindow;
    this.queue = new Queue();
  // end::solution[]
  // tag::description[]
  }

  /**
   * Add new request and calculate the current count within the window.
   * @param {number} timestamp - The current timestamp (increasing order)
   * @return {number} - The number of requests within the time window.
   */
  request(timestamp) {
  // end::description[]
  // tag::solution[]
    this.queue.enqueue(timestamp);
    while (timestamp - this.queue.peek() > this.window) this.queue.dequeue();

    return this.queue.size;
  // end::solution[]
  // tag::description[]
  }
}
// end::description[]

module.exports = { RecentCounter };
