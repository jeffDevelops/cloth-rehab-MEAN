const Sequelize = require('sequelize');

module.exports = function(sequelize, Sequelize) {
  let Shirt = sequelize.define('shirt', {
    slug: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "The title field must not be empty."
        }
      }
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "The description field must not be empty."
        }
      }
    },
    primaryImage: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "All shirts must have a primary image."
        }
      }
    },
    secondaryImage: {
      type: Sequelize.STRING
    },
    image3: {
      type: Sequelize.STRING
    },
    image4: {
      type: Sequelize.STRING
    },
    kidsPrice: {
      type: Sequelize.FLOAT
    },
    price: {
      type: Sequelize.FLOAT
    },
    materials: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "All items must have a materials gist."
        }
      }
    },
    creator: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "All items must have been created by somebody."
        }
      }
    },
    created: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "All items must have a date, so that when they go into the portfolio section, they can be ordered chronologically."
        }
      }
    },
    kidsExtraSmallAvail: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Are there any kids' XS sizes available for this item? If not, please assign that field 0."
        }
      }
    },
    kidsSmallAvail: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Are there any kids' S sizes available for this item? If not, please assign that field 0."
        }
      }
    },
    kidsMediumAvail: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Are there any kids' M sizes available for this item? If not, please assign that field 0."
        }
      }
    },
    kidsLargeAvail: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Are there any kids' L sizes available for this item? If not, please assign that field 0."
        }
      }
    },
    kidsExtraLargeAvail: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Are there any kids' XL sizes available for this item? If not, please assign that field 0."
        }
      }
    },
    extraSmallAvailable: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Are there any XS sizes available for this item? If not, please assign that field 0."
        }
      }
    },
    smallAvailable: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Are there any S sizes available for this item? If not, please assign that field 0."
        }
      }
    },
    mediumAvailable: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Are there any M sizes available for this item? If not, please assign that field 0."
        }
      }
    },
    largeAvailable: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Are there any L sizes available for this item? If not, please assign that field 0."
        }
      }
    },
    extraLargeAvailable: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Are there any XL sizes available for this item? If not, please assign that field 0."
        }
      }
    },
    xxlAvailable: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Are there any XXL sizes available for this item? If not, please assign that field 0."
        }
      }
    },
    model: {
      type: Sequelize.STRING,
    },
    photographer: {
      type: Sequelize.STRING
    },
    isWomens: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "The system needs to be able to sort shirts according to sex: please provide whether the item is mens or womens."
        }
      }
    },
    isLongSleeve: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "The system needs to be able to sort shirts according to sleeve length: please provide whether the item is long- or short-sleeved."
        }
      }
    },
    isShift: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "The system needs to be able to sort women's items based on whether they are dresses or shirts: please provide whether the item is a shift or a shirt."
        }
      }
    },
    isLuxury: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "The system needs to be able to sort items based on whether they are luxury items."
        }
      }
    }
  });
  return Shirt;
}
