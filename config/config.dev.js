/*
 *
 * 开发环境配置
 * 下面是码良依赖的各种服务，请务必逐一配置
 * 
 */

module.exports = {
  sequelize: {
    dialect: 'mysql',
    port: '3306',
    database: 'godspen_db',
    host: '',
    username: '',
    password: ''
  },
  oss: {
    accessKeyId: '',
    accessKeySecret: '',
    host: '', // eg. https://xxxxxx.oss-cn-hangzhou.aliyuncs.com'
    bucket: '',
    region: '', // eg. oss-cn-hangzhou
    internal: false,
    prefix: 'godspen-dev/'
  },
  es: {
    index: 'godspen',
    type: 'doc',
    host: '',
  },
  // redis 单节点
  redis: {
    host: '',
    port: 6379
  },
  // redis 集群
  // redis: [
  //   {host: '', port: 6390},
  //   {host: '', port: 6391},
  //   {host: '', port: 6390},
  // ],
  mail: {
    host: '',
    port: 465,
    secure: true, // 端口号为465时，请设置为true
    user: 'xxx@xx.com',
    pass: '',
  },
  ADMIN_PATH: '/' // 开发环境下的一级路径，也可以为全路径 http://127.0.0.1:8567/
}