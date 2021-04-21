const joi = require('@hapi/joi');
const schema = {
    campaign : {
        step1 : joi.object({        
            title : joi.string().required(),
            description : joi.string(),
            user_id : joi.number().required(),
            camp_id : joi.number(),
            step : joi.number().required()
        }),

        step2 : joi.object({
            city : joi.string().required(),
            vehicleType : joi.string().valid('Car', 'Motorcycle/Bike', 'Scooter').required(),
            condition : joi.string().valid('used', 'new', 'both').required(),
            camp_id : joi.number().required(),
            radius_min : joi.number(),
            radius_max : joi.number(),
            step : joi.number().required()
        }),
        
        step3 : joi.object({        
            transmission_type : joi.array(),
            camp_id : joi.number().required(),
            make : joi.string(),
            model : joi.array(),
            min_year : joi.number(),
            max_year : joi.number(),
            kms_range : joi.string(),
            step : joi.number().required()
        }),
        
        step4 : joi.object({    
            camp_id : joi.number().required(), 
            time_to_buy : joi.array(),
            exterior_color : joi.array(),
            body_type : joi.array(),
            step : joi.number().required()
        }),
        
        step5 : joi.object({    
            camp_id : joi.number().required(), 
            otp_verified_leads : joi.number(),
            droom_qualified_leads : joi.number(),
            need_loan : joi.number(),
            need_insurance : joi.number(),
            exchange_vehicle : joi.number(),
            step : joi.number().required()
        }),

        step6 : joi.object({    
            camp_id : joi.number().required(), 
            budget : joi.number().required(),
            spending_limit : joi.number().required(),
            start_date : joi.date().required(),
            end_date : joi.date().required(),
            cost_per_lead : joi.number(),
            total_leads : joi.number(),
            step : joi.number().required()
        }),

        step7 : joi.object({    
            camp_id : joi.number().required(), 
            payment_preference : joi.string().required(),
            step : joi.number().required()
        })
    }
}

module.exports = schema;