module.exports = {
  dialect: 'postgres',
  database: 'gobarber',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
