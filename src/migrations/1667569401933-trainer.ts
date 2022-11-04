import { MigrationInterface, QueryRunner } from 'typeorm';

export class trainer1667569401933 implements MigrationInterface {
  name = 'trainer1667569401933';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "trainer" ("id" SERIAL NOT NULL, "name" character varying(200) NOT NULL, "email" character varying(200) NOT NULL, "password" character varying(200) NOT NULL, CONSTRAINT "UQ_ce2cdec7da2cbe6593e00ac502c" UNIQUE ("email"), CONSTRAINT "PK_8dfa741df6d52a0da8ad93f0c7e" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "trainer"`);
  }
}
