/**
 * 云函数：数据库操作通用函数
 * 
 * insert：增
 * delete：删
 * update：改
 * get   ：查
 * 
 * 调用样例
 * wx.cloud.callFunction({
 *   name: 'cloud_common_db',
 *   data: {
 *     type:"insert",  
 *     db:"subjects",
 *     data:{}
 *   },
 *   success: res => {},
 *   fail: err => {}
 * });
 * 
 */

const cloud = require('wx-server-sdk');

cloud.init();
const db = cloud.database();
const _ = db.command;

exports.main = async (event, context) => {
  const targetDB = db.collection(event.db)
  try {
    switch (event.type) {
      case "insert":
        return await targetDB.add({
          data: event.data
        });
      case "delete":
        return await targetDB.where(event.condition).remove();
      case "update":
        return await targetDB.doc(event.indexKey).update({
          data: event.data
        });
      case "get":
        return await targetDB.where(event.condition)
          .skip(20 * event.skip)
          .limit(event.limit)
          .get();
    }
  } catch (e) {
    console.log(e);
  }
}