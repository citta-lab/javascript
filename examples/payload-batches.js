/**
 * There is an Configuration API which is used for bulk assigning properties to objects. 
 * You assign a property to an object by passing an array of pairs of the form:
 *    Array<{target_uid: string, property_uid: string}>
 * 
 * Example: to assign properties `p1` and `p2` to target with uid `t1` we would send following API payload:
 * [
 *   { target_uid: 't1', property_uid: 'p1' },
 *   { target_uid: 't1', property_uid: 'p2' }
 * ]
 *
 * API limitations:
 * 1. All assignemnts for a given target must be in the same batch
 * 2. There is maximum number of assignments for a single request. You cannot have more assignments than this batch limit.
 *    Exception: you can exceed the batch limit to accommodate requirement #1
 *
 * Task: write a function that composes a batched payload for this API which has following inputs and outputs
 *
 * Input arguments:
 * targetUids: array of strings - target uids to which we will assign all requested properies
 * propertyUids: array of strings - uids of properties we want to assign to all targets
 *
 * Output: Array of arrays. An array of batches, where each batch has multiple assignments. 
 *
 * Example input/output:
 *
 * API_BATCH_SIZE_LIMIT = 3
 *
 * getPayloadBatches(['t1', 't2', 't3', 't4'], ['p1', 'p2'])
 *  *   [
 * [{target_uid: 't1', property_uid: 'p1'}, {target_uid: 't1', property_uid: 'p2'}],
 * [{target_uid: 't2', property_uid: 'p1'}, {target_uid: 't2', property_uid: 'p2'}],
 * [{target_uid: 't3', property_uid: 'p1'}, {target_uid: 't3', property_uid: 'p2'}],
 * [{target_uid: 't4', property_uid: 'p1'}, {target_uid: 't4', property_uid: 'p2'}]
 * ]
 * 
 *  * getPayloadBatches(['t1', 't2', 't3', 't4'], ['p1'])
 * => [
 *   [{target_uid: 't1', property_uid: 'p1'}, {target_uid: 't2', property_uid: 'p1'}, { target_uid: 't3', property_uid: 'p1'}],
 *   [{target_uid: 't4', property_uid: 'p1'}]
 * ]
 *
 * getPayloadBatches(['t1', 't2'], ['p1', 'p2'])
 * => [
 *   [{target_uid: 't1', property_uid: 'p1'}, {target_uid: 't1', property_uid: 'p2'}],
    [{target_uid: 't2', property_uid: 'p1'}, {target_uid: 't2', property_uid: 'p2'}]
 * ]
 *
 * getPayloadBatches(['t1'], ['p1', 'p2', 'p3', 'p4', 'p5'])
 * => [
 *   [{target_uid: 't1', property_uid: 'p1'}, {target_uid: 't1', property_uid: 'p2'}, {target_uid: 't1', property_uid: 'p3'}, {target_uid: 't1', property_uid: 'p4'}, {target_uid: 't1', property_uid: 'p5'}]
 * ]
 */

const API_BATCH_SIZE_LIMIT = 3; // this potentially can be anything, we just assume it's 3

function getPayloadBatches(targetarr, propArr) {
  let result = [];
  let count = 0;

  for (let i = 0; i < targetarr.length; i++) {
    let group = [];
    for (let j = 0; j < propArr.length; j++) {
      let hash = {};
      let targetName = targetarr[i];
      let propName = propArr[j];

      //target_uid: 't1', property_uid: 'p1'

      hash["target_uid"] = targetName;
      hash["property_uid"] = propName;

      group.push(hash);
    }

    result.push(group);
  }

  console.log(result);
}

console.log(
  getPayloadBatches(["t1", "t2", "t3", "t4"], ["p1", "p2"]),
  "\n"
  //   getPayloadBatches(['t1', 't2'], ['p1', 'p2']), '\n',
  //   getPayloadBatches(['t1'], ['p1', 'p2', 'p3', 'p4', 'p5']), '\n',
);
