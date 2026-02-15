module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: true },
    phone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: true },

    arrivalDate: { type: DataTypes.DATEONLY, allowNull: false },
    leavingDate: { type: DataTypes.DATEONLY, allowNull: false },

    numberOfPeople: { type: DataTypes.INTEGER, allowNull: false },
    roomId: { type: DataTypes.INTEGER, allowNull: true }, // maps to home page room
    message: { type: DataTypes.TEXT, allowNull: true },

    price: { type: DataTypes.DECIMAL(10,2), allowNull: true }
  }, {
    tableName: 'bookings',
    timestamps: true
  });

  return Booking;
};