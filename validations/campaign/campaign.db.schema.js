var mongoose = require("mongoose");
var userSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 50,
      trim: true
    },  
    description: {
      type: String,
      required: true,
      trim: true
    },   
    step: {
      type: String,
      trim: true,
      required: true
    },
    user_id: {
      type: Number,
      trim: true,
      // required: true
    },
    camp_id: {
      type: Number,
      trim: true,
      // required: true
    },
    status: {
      type: String,
      // required: true,
      trim: true
    },  
    city: {
      type: String,
      // required: true,
      maxlength: 50,
      trim: true
    },  
    vehicleType: {
      type: String,
      // required: true,
      trim: true
    },   
    condition: {
      type: String,
      trim: true,
      // required: true
    },
    min_kms_range: {
      type: Number,
      // required: true,
      trim: true
    },   
    max_kms_range: {
      type: Number,
      trim: true,
      // required: true
    },
    make: {
      type: String,
      // required: true,
      trim: true
    },   
    model: {
      type: Array,
      trim: true,
      // required: true
    },
    transmission_type: {
      type: Array,
      trim: true,
      // required: true
    },
    time_to_buy: {
      type: Array,
      trim: true,
      // required: true
    },
    exterior_color: {
      type: Array,
      trim: true,
      // required: true
    },
    body_type: {
      type: Array,
      trim: true,
      // required: true
    },
    min_year: {
      type: String,
      // required: true,
      trim: true
    },   
    droom_qualified_leads: {
      type: Number,
      trim: true,
      // required: true
    },
    need_loan: {
      type: String,
      // required: true,
      trim: true
    },  
    need_insurance: {
      type: String,
      // required: true,
      trim: true
    },   
    exchange_vehicle: {
      type: String,
      trim: true,
      // required: true
    },
    start_date: {
      type: String,
      // required: true,
      trim: true
    },   
    end_date: {
      type: String,
      trim: true,
      // required: true
    },
    spending_limit: {
      type: String,
      // required: true,
      trim: true
    },   
    budget: {
      type: Number,
      trim: true,
      // required: true
    },
    is_exclusive: {
      type: Number,
      // required: true,
      trim: true
    },  
    exclusive_cost_per_lead: {
      type: Number,
      // required: true,
      trim: true
    },   
    sort_cost_per_lead: {
      type: Number,
      trim: true,
      // required: true
    },
    daily_average: {
      type: Number,
      // required: true,
      trim: true
    },   
    is_custom: {
      type: Number,
      trim: true,
      // required: true
    },
    cost_per_lead: {
      type: Number,
      // required: true,
      trim: true
    },   
    total_leads: {
      type: Number,
      trim: true,
      // required: true
    },
    payment_preference: {
      type: String,
      trim: true,
      // required: true
    }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

module.exports = mongoose.model("campaign", userSchema);