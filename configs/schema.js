import { pgTable, serial, text, integer, varchar, numeric, boolean, json } from 'drizzle-orm/pg-core';

export const CarListing = pgTable('carListing',{
    id: serial('id').primaryKey(),
    listingTitle: varchar('listingTitle').notNull(),
    tagLine: varchar('tagLine'),
    originalPrice: numeric('originalPrice').notNull(),
    sellingPrice: numeric('sellingPrice').notNull(),
    brand: varchar('brand').notNull(),
    year: integer('year').notNull(),
    engineSize: varchar('engineSize'),
    cylinder: varchar('cylinder'),
    mileage: integer('mileage'),
    condition: text('condition').notNull(), // Use ENUM or text for options like 'bad', 'acceptable', etc.
    type: text('type').notNull(), // Use ENUM or text for options like 'suv', 'sport car', etc.
    fuelType: text('fuelType').notNull(), // Use ENUM or text for options like 'Gasoline', 'Diesel', etc.
    color: text('color').notNull(), // Use ENUM or text for color options
    vin: varchar('vin'),
    listingDescription: text('listingDescription'),
    features:json('features')
})