import { pgTable, serial, text, integer, varchar, numeric, boolean, json } from 'drizzle-orm/pg-core';

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

export const carSeller = pgTable('carSeller',{
    id: serial('id').primaryKey(),
    createdBy: varchar('createdBy').notNull(),
    userName: varchar('userName').notNull().default('unknown'),
    userImageUrl : varchar('userImageUrl'),
    price: numeric('price').notNull(),
    originalPrice: numeric('originalPrice').notNull(),
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
    tag: varchar('tag').default('used')

})

export const carSellerImgs = pgTable('CarSellerImgs',{
    id: serial('id').primaryKey(),
    imageUrl: varchar('imageUrl').notNull(),
    carSellerId: integer('carSellerId').notNull().references(()=>carSeller.id) 
})
