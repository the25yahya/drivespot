import { pgTable, serial, text, integer, varchar, numeric, boolean, json } from 'drizzle-orm/pg-core';

export const CarListing = pgTable('carListing',{
    id: serial('id').primaryKey(),
    createdBy: varchar('createdBy').notNull(),
    userName: varchar('userName').notNull().default('unknown'),
    userImageUrl : varchar('userImageUrl'),
    listingTitle: varchar('listingTitle').notNull(),
    tagLine: varchar('tagLine'),
    originalPrice: numeric('originalPrice').notNull(),
    sellingPrice: numeric('sellingPrice').notNull(),
    brand: varchar('brand').notNull(),
    year: integer('year').notNull(),
    engineSize: varchar('engineSize'),
    cylinder: varchar('cylinder'),
    mileage: integer('mileage'),
    condition: text('condition').notNull(), 
    type: text('type').notNull(), 
    fuelType: text('fuelType').notNull(), 
    color: text('color').notNull(), 
    vin: varchar('vin'),
    listingDescription: text('listingDescription'),
    features:json('features'),
    tag: varchar('tag').default('used')
})

export const CarImgs = pgTable('CarImgs',{
    id: serial('id').primaryKey(),
    imageUrl: varchar('imageUrl').notNull(),
    CarListingId: integer('CarListingId').notNull().references(()=>CarListing.id) 
})

export const carInventory = pgTable('carInventory',{
    id: serial('id').primaryKey(),
    price: numeric('price').notNull(),
    name: varchar('name').notNull(),
    brand: varchar('brand').notNull(),
    type: text('type').notNull(), 
    fuelType: text('fuelType').notNull(), 
    cylinder: varchar('cylinder'),
    mileage: integer('mileage'),
    engineSize: text('engineSize'),
    features:json('features'),
    description: text('description'),
    color: text('color').notNull(), 
    year: integer('year').notNull(),
    tag: varchar('tag').default('new')

})

export const carInventoryImgs = pgTable('carInventoryImgs',{
    id: serial('id').primaryKey(),
    imageUrl: varchar('imageUrl').notNull(),
    CarInventoryId: integer('CarInventoryId').notNull().references(()=>carInventory.id) 
})