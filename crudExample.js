const pool = require('./db');
 
async function basicCrud() {
  let conn;
  try {
    conn = await pool.getConnection();
   
    
    // 2. SELECT 查詢
    sql = 'SELECT * FROM STUDENT WHERE Department_ID = ?';
    //找department_id = 'CS001'
    const rows = await conn.query(sql, ['CS001']);
    console.log('查詢結果：', rows);


    // 3. UPDATE 更新
    sql = 'UPDATE STUDENT SET Name = ? WHERE Student_ID = ?';
    const result = await conn.query(sql, ['王小明', 'S10810001']);

    if (result.affectedRows === 0) {
      console.log('( º﹃º )：找不到符合條件的學生');
    } else {
      console.log('(⁰▿⁰)：已更新學生名稱');
    }

    
    
  } catch (err) {
    console.error('操作失敗：', err);
  } finally {
    if (conn) conn.release();
  }
}
 
basicCrud();