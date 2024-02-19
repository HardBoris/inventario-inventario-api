import { MigrationInterface, QueryRunner } from "typeorm";

export class ItemEntityWithChildEntities1708304245737 implements MigrationInterface {
    name = 'ItemEntityWithChildEntities1708304245737'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "items" ("itemId" uuid NOT NULL DEFAULT uuid_generate_v4(), "item" character varying NOT NULL, "description" character varying NOT NULL, "defaultUnit" character varying NOT NULL, "minimumStock" integer NOT NULL DEFAULT '0', "idealStock" integer NOT NULL DEFAULT '1', "toolModel" character varying, "toolPower" character varying, "producer" character varying, "width" double precision, "height" double precision, "thickness" double precision, "packet" character varying, "unitPerPacket" integer, "type" character varying NOT NULL, CONSTRAINT "PK_151f283a98f27c634dacfdb965b" PRIMARY KEY ("itemId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_08b27979745f1f9d89f3bc21df" ON "items" ("type") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_08b27979745f1f9d89f3bc21df"`);
        await queryRunner.query(`DROP TABLE "items"`);
    }

}
